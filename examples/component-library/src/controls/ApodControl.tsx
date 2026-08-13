import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ApodDataSourceInstance, ApodInfo, ControlDataSources, Fe2ControlProps } from '../types/fe2-plugins';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

function findApodInstance(dataSources?: ControlDataSources): ApodDataSourceInstance | null {
  const instances = dataSources?.instances ?? [];
  for (const resolved of instances) {
    const instance = resolved?.instance;
    if (!instance) continue;
    const interfaces = instance.interfaces ?? [];
    if (interfaces.includes('apod-image')) {
      return instance;
    }
  }
  return null;
}

async function retrieveFromInstance(instance: ApodDataSourceInstance): Promise<ApodInfo> {
  if (typeof instance.list === 'function') {
    return instance.list();
  }
  throw new Error('Bound data source does not expose list() method.');
}

/**
 * FE2 control: asks the bound apod-image DS for today's picture and displays it.
 * Field value is a JSON string of the APOD payload (empty when unset).
 */
export function ApodControl(props: Fe2ControlProps) {
  const { value, setValue, field, readonly, dataSources } = props;
  const id = `fe2-plugin-control-apod-${field?.id ?? 'field'}`;

  // const [preview, setPreview] = useState<ApodInfo | null>(value);
  const [preview, setPreview] = useState<any>(value); // TODO: type
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPreview(value);
  }, [value]);

  const instance = useMemo(() => findApodInstance(dataSources), [dataSources]);
  const dsStatus = dataSources?.status ?? 'idle';
  const dsReady = dsStatus === 'ready' || dsStatus === 'idle';

  const fetchApod = useCallback(async () => {
    if (!instance) {
      setError(
        'No apod-image data source is bound to this field. Update the content type definition to add options to this control.'
      );
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const apod = await retrieveFromInstance(instance);
      setPreview(apod);
      setValue(apod);
    } catch (err) {
      console.error('APOD fetch failed.', err);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, [instance, setValue]);

  const clearValue = useCallback(() => {
    setPreview(null);
    setValue('');
    setError(null);
  }, [setValue]);

  const FormsEngineField = globalThis.craftercms?.formsEngine?.controls?.FormsEngineField;
  if (!FormsEngineField) {
    return null;
  }

  const mediaUrl = preview?.url || preview?.hdurl;

  return (
    <FormsEngineField field={field} htmlFor={id}>
      <Stack spacing={1.5} id={id}>
        {!instance && dsReady && (
          <Alert severity="warning">
            Bind an Astronomy Picture of the Day data source (interface apod-image) on this field to fetch the picture
            of the day.
          </Alert>
        )}
        {error && (
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        )}
        {!preview && (
          <Box
            sx={{
              p: 1,
              gap: 1,
              py: 0.5,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              color: 'primary.main',
              justifyContent: 'center'
            }}
          >
            <MenuItem
              component={Button}
              variant="text"
              loading={loading}
              onClick={fetchApod}
              disabled={Boolean(readonly) || loading || !instance}
              sx={{ flexDirection: 'column', justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ mr: 0, color: 'inherit' }}>
                <CachedOutlinedIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Fetch Astronomy Picture of the Day</Typography>
              </ListItemText>
            </MenuItem>
          </Box>
        )}
        {preview && (
          <Card sx={{ display: 'flex' }}>
            {mediaUrl && (
              <CardMedia
                component="img"
                sx={{ width: '40%' }}
                image={mediaUrl}
                alt={preview.title || 'Astronomy Picture of the Day'}
              />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="body1" marginBottom={1}>
                  {preview.title || 'Astronomy Picture of the Day'}
                </Typography>
                {preview.date && (
                  <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                    {preview.date}
                    {preview.copyright ? ` · © ${preview.copyright}` : ''}
                  </Typography>
                )}
                {preview.explanation && (
                  <Typography variant="body2" color="text.secondary">
                    {preview.explanation}
                  </Typography>
                )}

                <Box sx={{ mt: 1 }}>
                  {preview && !readonly && (
                    <Tooltip title="Refresh Astronomy Picture of the Day">
                      <IconButton size="small" onClick={fetchApod} disabled={Boolean(readonly) || loading || !instance}>
                        <CachedOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {preview.hdurl && (
                    <Tooltip title="HD image">
                      <IconButton
                        size="small"
                        onClick={() => {
                          if (preview.hdurl) {
                            window.open(preview.hdurl, '_blank');
                          }
                        }}
                      >
                        <VisibilityOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {preview && !readonly && (
                    <Tooltip title="Clear">
                      <IconButton size="small" onClick={clearValue} disabled={readonly}>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
              </CardContent>
            </Box>
          </Card>
        )}
      </Stack>
    </FormsEngineField>
  );
}

export default ApodControl;
