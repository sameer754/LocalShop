<?php 
namespace App\Repositories\Login;

use  App\Repositories\Login\ILoginRepositoryInterface;
use App\Models\User;
class LoginRepository implements ILoginRepositoryInterface{

    public function login($req){
        return User::where('email',$req->email)->first();

    }
}