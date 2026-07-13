<?php

return [
    'dsn' => env('SENTRY_LARAVEL_DSN', env('SENTRY_DSN')),
    'traces_sample_rate' => 1.0,
    'profiles_sample_rate' => 1.0,
    'send_default_pii' => false,
    'environment' => env('APP_ENV', 'production'),
];
