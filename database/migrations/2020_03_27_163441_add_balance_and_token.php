<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class AddBalanceAndToken extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('balances')->insert(array(
            'ammount'=>0
        ));

        DB::table('tokens')->insert(array(
            'token_number'=>10
        ));
        DB::table('tokens')->insert(array(
            'token_number'=>11
        ));
        DB::table('tokens')->insert(array(
            'token_number'=>12
        ));
        DB::table('tokens')->insert(array(
            'token_number'=>13
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
