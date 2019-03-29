import { trigger, transition, style, animate } from '@angular/animations';

export const studystreamanimations= {
    slidein: trigger('slidein', [
        transition(':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('1s linear', style({transform: 'translateX(0%)', opacity: 1}))
        ])
    ])
}