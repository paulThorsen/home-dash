import { AlertType } from '../models/alert-type';

export const ERRORS: Record<AlertType, string> = {
  GARAGE_WEBSOCKET_CONNECTION_FAILED:
    'Error connecting to garage. Attempting to reconnect...',
  GARAGE_CLOSE_FAILED: 'Error closing garage. Please try again.',
  GARAGE_OPEN_FAILED: 'Error opening garage. Please try again.',
  TV_OFF_FAILED: 'Error turning off TV. Please try again.',
  TV_ON_FAILED: 'Error turning on TV. Please try again.',
  TV_WEBSOCKET_CONNECTION_FAILED:
    'Error connecting to TV. Attempting to reconnect...',
  GET_WEATHER_FAILED: 'Failed to get weather. Retrying...',
} as const;
