import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a *ngIf="href; else btn" [href]="href" [ngClass]="computedClasses">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </a>
    <ng-template #btn>
      <button [type]="type" [ngClass]="computedClasses">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </button>
    </ng-template>
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class ButtonComponent {
  @Input() href?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'outline-brown' | 'outline-dark' = 'primary';
  @Input() size: 'hero' | 'normal' | 'fixed' | 'auto' = 'normal';
  @Input() customClass: string = '';

  get computedClasses(): string {
    let classes = ['font-[\'Lexend\']', 'transition', 'cursor-pointer'];

    // Base interaction & rounding
    if (this.variant !== 'outline-dark') {
      classes.push('hover:-translate-y-0.5', 'rounded-full');
    } else {
       classes.push('rounded-full');
    }

    // Variant
    switch(this.variant) {
      case 'primary':
        classes.push('bg-[#1c1b20]', 'text-white', 'hover:bg-[#101216]');
        break;
      case 'secondary':
        classes.push('bg-white/85', 'text-[#17385b]', 'hover:bg-white');
        break;
      case 'outline':
        classes.push('bg-transparent', 'border-2', 'border-[#161d27]', 'text-[#161d27]', 'hover:bg-[#161d27]', 'hover:text-white', 'inline-block');
        break;
      case 'outline-brown':
        classes.push('border-2', 'border-[#6f6659]', 'bg-[#f7f1e7]/80', 'text-[#2c2720]', 'hover:bg-[#ede1cf]', 'inline-block');
        break;
      case 'outline-dark': // Used for Contact Us
        classes.push('bg-transparent', 'border', 'border-[#161d27]', 'text-[#161d27]', 'hover:-translate-y-0.5', 'hover:bg-gray-50');
        break;
    }

    // Size
    switch(this.size) {
case 'hero':
  if (this.variant === 'primary' || this.variant === 'secondary') {
    classes.push(
      // Mobile: compact
      'min-w-[120px]', 'px-5', 'py-3', 'text-[15px]',
      // sm+: full hero size
      'sm:min-w-56', 'sm:px-12', 'sm:py-4', 'sm:text-[20px]',
      'font-normal'
    );
    if (this.variant === 'primary')  classes.push('shadow-[0_20px_45px_rgba(7,25,43,0.28)]');
    if (this.variant === 'secondary') classes.push('shadow-[0_20px_45px_rgba(7,25,43,0.22)]');
  }
  break;
      case 'normal':
        classes.push('px-12', 'py-3', 'text-[16px]', 'font-normal');
        break;
      case 'fixed':
        classes.push('flex', 'items-center', 'justify-center', 'w-[212px]', 'h-[56px]', 'text-[16px]');
        break;
      case 'auto':
        classes.push('px-12', 'py-3', 'text-[16px]');
        break;
    }
    
    if (this.customClass) {
      classes.push(this.customClass);
    }
    
    return classes.join(' ');
  }
}
