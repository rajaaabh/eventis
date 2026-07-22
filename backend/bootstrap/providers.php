<?php

return array_filter([
    App\Providers\AppServiceProvider::class,
    class_exists(\Laravel\Telescope\Telescope::class)
        ? App\Providers\TelescopeServiceProvider::class
        : null,
]);