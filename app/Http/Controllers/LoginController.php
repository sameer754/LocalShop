<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use  App\Repositories\Login\ILoginRepositoryInterface;

class LoginController extends Controller
{
    private $loginRepository;
    public function __construct(ILoginRepositoryInterface $loginRepository){
      $this->loginRepository=$loginRepository;
    }

    public function login(Request $req){
     
        $credentials = $req->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
          
        //    $user=User::where('email',$req->email)->first();
        $user= $this->loginRepository->login($req);
      
            if(!$user || !Hash::check($req->password,$user->password)){
                return response()->json([
                    'success' => false,
                    'message' => 'Login credentials are invalid',
                ], 500);
            }

          
            
                try {
                    if (! $token = JWTAuth::fromUser($user)) {
                        return response()->json([
                            'success' => false,
                            'message' => 'Login credentials are invalid.',
                        ], 400);
                    }
                } catch (JWTException $e) {
               
                    return response()->json([
                            'success' => false,
                            'message' => 'Could not create token.',
                        ], 500);
                }
            
                //Token created, return with success response and jwt token
                return response()->json([
                    'success' => true,
                    'token' => $token,
                ]);

      
    }
}
