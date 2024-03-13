import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StartPanelService } from '../servicio/start-panel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tpv-component',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './tpv.component.html',
})
export default class TpvComponent {

  data: any = {};
  hey: boolean = true;

  constructor(
    private startPanelService: StartPanelService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    this.startPanelService.getTpv('assets/tpv.json')
    .subscribe({
      next: (res) => {
        this.data = res[0].contract;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Could not get Tpv: ', err);
      },
    })
  }
}
