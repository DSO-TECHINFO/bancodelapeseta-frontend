import { Injectable, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LayoutService{

  // RESPONSIVE =========================
  isMobile: boolean = false;
  isTablet: boolean = false;
  isLaptop: boolean = false;
  isDesktop: boolean = false;
  // LAYOUT =============================
  header: boolean
  headerMobile: boolean
  nav: boolean
  sidenav: boolean
  navbar: boolean
  footer: boolean
  // PANEL =============================
  // OTHERS ============================
  segment: string = '';

  //**************************
  constructor(  private location: Location,  public router: Router,  private breakpointObserver: BreakpointObserver,  private titleService: Title) {
    // Observa cambios en el breakpoint 'HandsetPortrait'
    this.breakpointObserver.observe(Breakpoints.WebLandscape).subscribe(result => { this.isDesktop = result.matches; });
    // LAYOUT =============================
    this.header = true // this.isDesktop ? true : false;
    this.headerMobile = true;
    this.nav = false;
    this.sidenav = false;
    this.navbar = true;
    this.footer = false;
  }
  //***************************



  // Retrocede en el historial de navegación
  backPage(): void {
    if (this.location && this.location.back) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  // Muestra u oculta el Sidenav
  showUiSidenav(): void {
    this.sidenav = !this.sidenav;
  }

  // Cambia el título de la página
  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }


}

