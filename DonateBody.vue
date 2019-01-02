<template>
  <div>
    <div id = "donate-text" data-aos="fade-down" 
      data-aos-duration=2000
      data-aos-anchor-placement="top-bottom">
      <p>All donations go to maintaining & improving the site. As always, thanks for all your support!</p>
    </div>
    <center>
    <div id = "donation-buttons" data-aos="fade-down" 
      data-aos-duration=2000
      data-aos-anchor-placement="top-bottom">
      <span id = "venmo-button">
          <a href = "https://venmo.com/Arman-Madani">
            <img src = "src/assets/venmo-logo.png" width="145px" height="50px" border="0">
          </a>
      </span>
      <span id = "paypal-button">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="K9A5TLHL6GBQE" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
      </span>
    </div>
  </center>
  </div>
</template>

<script>
export default {
  name: "DonateBody"
}
</script>

<style>
</style>