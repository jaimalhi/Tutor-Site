<script>
   import { calendlyLink } from "$lib/config/links.js";
</script>

<div class="navbar absolute bg-neutral-content md:bg-transparent z-10">
   <div class="navbar-start mt-1">
      <a href="/" class="flex justify-end">
         <img src="/logos/avio-light.png" width="128px" alt="avio-tutor-logo" />
      </a>
   </div>
   <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 font-semibold text-base-100">
         <li><a href="/">Home</a></li>
         <li><a href="/how-it-works">How it Works</a></li>
         <li><a href="/contact">Contact Us</a></li>
      </ul>
   </div>
   <div class="navbar-end">
      <div class="dropdown dropdown-left">
         <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-5 w-5 text-base-100"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor">
               <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
         </div>
         <ul
            class="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            id="nav-dropdown">
            <li><a href="/" tabindex="0">Home</a></li>
            <li>
               <a href="/how-it-works" tabindex="0">How it Works</a>
            </li>
            <li>
               <a href="/contact" tabindex="0">Contact Us</a>
            </li>
            <hr />
            <!-- <li><a href="/login" class="text-primary" tabindex="0">Login</a></li> -->
            <li>
               <a href={calendlyLink} target="_blank" class="text-primary" tabindex="0">
                  FREE Consultation
               </a>
            </li>
         </ul>
      </div>
      <div class="hidden lg:flex">
         <!-- <a href="/login" class="btn btn-outline text-base-100 mr-4 px-6">Login</a> -->
         <a href={calendlyLink} target="_blank" class="btn btn-primary text-base-100 mr-4">
            Book a FREE Consultation
         </a>
      </div>
   </div>
</div>

<style>
   /* Handle touch events explicitly */
   #nav-dropdown li a {
      touch-action: manipulation;
   }
</style>
