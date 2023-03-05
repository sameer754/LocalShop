<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use  App\Repositories\Login\ILoginRepositoryInterface;
use  App\Repositories\Login\LoginRepository;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ILoginRepositoryInterface::class,LoginRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
