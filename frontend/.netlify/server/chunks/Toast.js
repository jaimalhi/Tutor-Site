import { a as subscribe } from "./lifecycle.js";
import { c as create_ssr_component, e as escape } from "./ssr.js";
const css = {
  code: ".fade-out.svelte-rws39v{opacity:0;transition:opacity 0.5s}",
  map: `{"version":3,"file":"Toast.svelte","sources":["Toast.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let message;\\nexport let allErrors;\\nexport let successMsg = \\"\\";\\nexport let errorMsg = \\"\\";\\nlet fadeOut = false;\\nlet showToast = false;\\nlet toastSuccess;\\n$: {\\n  if ($message) {\\n    fadeOut = false;\\n    showToast = true;\\n    toastSuccess = true;\\n    setTimeout(() => {\\n      fadeOut = true;\\n      setTimeout(() => {\\n        showToast = false;\\n      }, 500);\\n    }, 3e3);\\n  } else if ($allErrors.length > 0) {\\n    fadeOut = false;\\n    showToast = true;\\n    toastSuccess = false;\\n    setTimeout(() => {\\n      fadeOut = true;\\n      setTimeout(() => {\\n        showToast = false;\\n      }, 500);\\n    }, 3e3);\\n  }\\n}\\n<\/script>\\r\\n\\r\\n{#if showToast}\\r\\n   <div class=\\"toast toast-bottom toast-end {fadeOut ? 'fade-out' : ''}\\">\\r\\n      <div class=\\"alert {toastSuccess ? 'alert-success' : 'alert-error'}\\">\\r\\n         <span>\\r\\n            {toastSuccess ? successMsg : errorMsg}\\r\\n         </span>\\r\\n      </div>\\r\\n   </div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n   .fade-out {\\r\\n      opacity: 0;\\r\\n      transition: opacity 0.5s;\\r\\n   }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2CG,uBAAU,CACP,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IACvB"}`
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $allErrors, $$unsubscribe_allErrors;
  let $message, $$unsubscribe_message;
  let { message } = $$props;
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  let { allErrors } = $$props;
  $$unsubscribe_allErrors = subscribe(allErrors, (value) => $allErrors = value);
  let { successMsg = "" } = $$props;
  let { errorMsg = "" } = $$props;
  let fadeOut = false;
  let showToast = false;
  let toastSuccess;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.allErrors === void 0 && $$bindings.allErrors && allErrors !== void 0)
    $$bindings.allErrors(allErrors);
  if ($$props.successMsg === void 0 && $$bindings.successMsg && successMsg !== void 0)
    $$bindings.successMsg(successMsg);
  if ($$props.errorMsg === void 0 && $$bindings.errorMsg && errorMsg !== void 0)
    $$bindings.errorMsg(errorMsg);
  $$result.css.add(css);
  {
    {
      if ($message) {
        fadeOut = false;
        showToast = true;
        toastSuccess = true;
        setTimeout(
          () => {
            fadeOut = true;
            setTimeout(
              () => {
                showToast = false;
              },
              500
            );
          },
          3e3
        );
      } else if ($allErrors.length > 0) {
        fadeOut = false;
        showToast = true;
        toastSuccess = false;
        setTimeout(
          () => {
            fadeOut = true;
            setTimeout(
              () => {
                showToast = false;
              },
              500
            );
          },
          3e3
        );
      }
    }
  }
  $$unsubscribe_allErrors();
  $$unsubscribe_message();
  return `${showToast ? `<div class="${"toast toast-bottom toast-end " + escape(fadeOut ? "fade-out" : "", true) + " svelte-rws39v"}"><div class="${"alert " + escape(toastSuccess ? "alert-success" : "alert-error", true)}"><span>${escape(toastSuccess ? successMsg : errorMsg)}</span></div></div>` : ``}`;
});
export {
  Toast as T
};
