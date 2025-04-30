<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GoogleCreds extends Model
{
    protected $fillable = [
        'email',
        'avatar',
        'expiresIn',
        'token',
        'refreshToken',
        'user_id',
    ];

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
