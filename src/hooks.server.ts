import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle, initCloudflareSentryHandle } from '@sentry/sveltekit';

// If you have custom handlers, make sure to place them after `sentryHandle()` in the `sequence` function.
export const handle = sequence(
	initCloudflareSentryHandle({
		dsn: 'https://b473eacf54d77917c8440f75683345ce@o4505793464107008.ingest.us.sentry.io/4509605102682112',
		tracesSampleRate: 1.0,
	}),
	sentryHandle()
);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
