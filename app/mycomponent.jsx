// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";
import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);

  return (
    <div className="mt-16 flex justify-center">
       <div className="mt-16 flex justify-center flex-col">
<h1 class="mb-2 mt-0 text-5xl font-medium leading-tight text-primary">
  Dave MIQUEL à votre service
</h1>
      <p className="text-lg">
        Comment me contacter ?
        <a
          href="#"
          className="text-primary pl-1 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          data-te-toggle="tooltip"
          title="Hi! I'm tooltip"
        >
          Demander de devis
        </a>
      </p>
      </div>
<img
  src="toitrouge.png"
  class="h-auto max-w-full"
  alt="..." />
    </div>

  );
};

export default MyComponent;