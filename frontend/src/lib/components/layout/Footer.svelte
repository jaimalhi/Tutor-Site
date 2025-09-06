<script>
   import { avioEmail2 } from "$lib/config/links.js";
</script>

<footer class="footer p-10 bg-neutral text-base-100">
   <nav>
      <a href="/">
         <img src="/logos/avio-light.png" width="128px" alt="avio-tutor-logo" />
      </a>
      <br />
      <p class="opacity-50 text-xs">&#169; 2024 Avio Learning Inc.</p>
   </nav>
   <nav>
      <h6 class="footer-title">About Us</h6>
      <a href="/how-it-works" class="link link-hover">How it Works</a>
      <a href="/contact" class="link link-hover">Contact Us</a>
      <a href="/careers/become-a-tutor" class="link link-hover">Become a Tutor</a>
   </nav>
   <nav>
      <h6 class="footer-title">Legal</h6>
      <a href="/legal/terms-of-service" class="link link-hover">Terms of Service</a>
      <a href="/legal/privacy-policy" class="link link-hover">Privacy Policy</a>
   </nav>
   <nav>
      <h6 class="footer-title">Contact</h6>
      <a class="link link-hover" id="icons" data-auto-recognition="true" href="mailto:{avioEmail2}">
         <img src="/icons/mail.png" alt="email-icon" />
         {avioEmail2}
      </a>
      <a class="link link-hover" id="icons" href="tel:+17789890044">
         <img src="/icons/telephone.png" alt="email-icon" />
         +1 778 989 0044
      </a>
   </nav>
</footer>

<style>
   #icons img {
      filter: invert(1) brightness(2);
      margin-right: 8px;
      width: 20px;
   }

   #icons {
      display: flex;
   }
</style>
