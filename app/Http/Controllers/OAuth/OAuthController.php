<?php

namespace App\Http\Controllers\OAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class OAuthController extends Controller
{
    function show (Request $request){
        return Inertia::render("oauth");
    }

    function redirect (){
        return Socialite::driver("google")->redirect();
    }

    function callback () {
        $user=Socialite::driver("google")->user();
        
        return Inertia::render("oauth",[
            "user"=>$user
        ]);

    }

    function processOAuthData (Request $request){

        $data=$request->user;

        $user=auth()->user();

        $creds=$user->googleCreds()->updateOrCreate(
            [
                "email"=>$data["email"],
                "avatar"=>$data["avatar"],
                "expiresIn"=>$data["expiresIn"],
                "token"=>$data["token"],
                "refreshToken"=>$data["refreshToken"],
            ]
        );

        return response()->json([ "data"=> $data ]);
    }

    function getUser (){
        $user=auth()->user();

        if($user->googleCreds()->count() == 0){
            return response()->json([ "user"=>null ]);
        }
        $user=$user->googleCreds()->first();

        return response()->json([ "user"=>$user ]);
    }
}
