import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<footer class="flex h-[540px] w-full flex-col justify-center items-center bg-[#111111] px-6 py-12 font-['Roboto'] text-[#a0a0a0] sm:px-12 lg:px-24 xl:px-40 gap-[60px]">
  <div class="flex w-full max-w-7xl flex-row justify-between gap-6">
    <!-- Logo Column -->
    <div class="flex flex-col">
      <img src="/4c625481-41dd-4500-866c-fb557d327214 2_edited.png" alt="NYPD Desi Society Logo" class="h-[208px] w-[208px] object-contain" />
    </div>

    <!-- Sitemap Column -->
    <div class="flex flex-col gap-[14px] pt-4">
      <h4 class="mb-2 font-['Cinzel'] font-normal text-[15px] uppercase tracking-wide text-[#dcdcdc]">Sitemap</h4>
      <a href="#home" class="text-[14px] transition hover:text-white">Home</a>
      <a href="#about" class="text-[14px] transition hover:text-white">Abouts</a>
      <a href="#events" class="text-[14px] transition hover:text-white">Events</a>
      <a href="#team" class="text-[14px] transition hover:text-white">Our team</a>
      <a href="#magazine" class="text-[14px] transition hover:text-white">Magazine</a>
      <a href="#gallery" class="text-[14px] transition hover:text-white">Gallery</a>
      <a href="#contact" class="text-[14px] transition hover:text-white">Contact</a>
    </div>

    <!-- Socials Column -->
    <div class="flex flex-col gap-[14px] pt-4">
      <h4 class="mb-2 font-['Cinzel'] font-normal text-[15px] uppercase tracking-wide text-[#dcdcdc]">Socials</h4>
      <a href="#" class="text-[14px] transition hover:text-white">Facebook</a>
      <a href="#" class="text-[14px] transition hover:text-white">LinkedIn</a>
      <a href="#" class="text-[14px] transition hover:text-white">Instagram</a>
      <a href="#" class="text-[14px] transition hover:text-white">Twitter</a>
    </div>

    <!-- Office & Newsletter Column -->
    <div class="flex max-w-[320px] flex-col pt-4">
      <h4 class="mb-4 font-['Cinzel'] font-normal text-[15px] uppercase tracking-wide text-[#dcdcdc]">Head Office</h4>
      <p class="mb-12 text-[14px] leading-[1.8]">
        Xilliams Corner Wine © 2017. 1112 A Market St<br />
        # Ste B22, Charlottesville, CA 45565
      </p>

      <h4 class="mb-4 font-['Cinzel'] font-normal text-[15px] uppercase tracking-wide text-[#dcdcdc]">News Letter</h4>
      <div class="group flex items-center justify-between border-b border-[#444444] pb-2">
        <input type="email" placeholder="Enter your email address" class="w-full bg-transparent text-[14px] text-[#a0a0a0] outline-none placeholder:text-[#666666] font-['Roboto']" />
        <button class="transition hover:text-white">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Bottom section -->
  <div class="flex w-full max-w-7xl items-end justify-between pb-2">
    <div class="flex flex-1 justify-start">
      <a href="mailto:contact@lift.agency" class="border-b border-[#444444] pb-1 text-[15px] transition hover:text-white">contact@lift.agency</a>
    </div>
    <div class="flex flex-1 justify-center">
      <a href="tel:(123)456-7890" class="border-b border-[#444444] pb-1 text-[15px] transition hover:text-white">(123) 456-7890</a>
    </div>
    <div class="flex flex-1 justify-end">
      <p class="text-[13px] text-[#666666]">© 2020 Lift Media. All rights reserved.</p>
    </div>
  </div>
</footer>
  `
})
export class FooterComponent {}
