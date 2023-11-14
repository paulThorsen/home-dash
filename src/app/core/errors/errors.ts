import { AlertType } from '../models/alert-type';

export const ERRORS: Record<AlertType, string> = {
  GARAGE_WEBSOCKET_CONNECTION_FAILED:
    'Error connecting to garage. Attempting to reconnect...',
  GARAGE_CLOSE_FAILED: 'Error closing garage. Please try again.',
  GARAGE_OPEN_FAILED: 'Error opening garage. Please try again.',
} as const;
