import React from 'react';
 
 export default function PaypalForm(itemname, itemnumber, amount) {

   return (
    <form target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_donations"></input>
      <input type="hidden" name="business" value="K6VGSQREMG988"></input>
      <input type="hidden" name="item_name" value={itemname}></input>
      <input type="hidden" name="item_number" value=""></input>
      <input type="hidden" name="currency_code" value="GBP"></input>
      <input type="hidden" name="amount" id="amount_86e55eb7a4f3e6bd7eb54b739702384f" value={amount}></input>
      <input type="hidden" name="no_note" value="1"></input>
      <input type="hidden" name="no_shipping" value="1"></input>
      <input type="hidden" name="notify_url" value="https://stephaniemckittrick.com/wp-admin/admin-post.php?action=add_wpedon_button_ipn"></input>
      <input type="hidden" name="lc" value="en_GB"></input>
      <input type="hidden" name="bn" value="WPPlugin_SP"></input>
      <input type="hidden" name="return" value=""></input>
      <input type="hidden" name="cancel_return" value=""></input>
      <input className="wpedon_paypalbuttonimage" type="image" src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png" border="0" name="submit" alt="Make your payments with PayPal. It is free, secure, effective." ></input>
      <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" ></img>
    </form>
   );
 };