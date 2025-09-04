import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { TheMossComponent } from './the-moss/the-moss.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutMenuComponent } from './about-menu/about-menu.component';
import { VisitComponent } from './visit/visit.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DocumentsComponent } from './documents/documents.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { NewslettersComponent } from './newsletters/newsletters.component';
import { HistoryComponent } from './history/history.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { PeatlandsComponent } from './peatlands/peatlands.component';
import { MossMenuComponent } from './moss-menu/moss-menu.component';
import { BirdsComponent } from './birds/birds.component';
import { FungiComponent } from './fungi/fungi.component';
import { MothsComponent } from './moths/moths.component';
import { WildlifeMenuComponent } from './wildlife-menu/wildlife-menu.component';
import { WildlifeLandingComponent } from './wildlife-landing/wildlife-landing.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        MenuComponent,
        HeaderComponent,
        AboutMenuComponent,
        VisitComponent,
        MossMenuComponent,
        TheMossComponent,
        WildlifeComponent,
        BirdsComponent,
        FungiComponent,
        MothsComponent,
        WildlifeMenuComponent,
        WildlifeLandingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent, data: { state: 'home' } },
            {
                path: 'about', component: AboutComponent, data: { state: 'about' },
                children:
                    [
                        { path: '', redirectTo: '/about/(about:about-us)', pathMatch: 'full' },
                        { path: 'about-us', component: AboutUsComponent, outlet: 'about' },
                        { path: 'contact-us', component: ContactUsComponent, outlet: 'about' },
                        { path: 'newsletters', component: NewslettersComponent, outlet: 'about' },
                        { path: 'documents', component: DocumentsComponent, outlet: 'about' },
                        { path: 'join-us', component: JoinUsComponent, outlet: 'about' }
                    ]
            },
            {
                path: 'the-moss', component: TheMossComponent, data: { state: 'the-moss' },
                children:
                    [
                        { path: '', redirectTo: '/the-moss/(moss:history)', pathMatch: 'full' },
                        { path: 'history', component: HistoryComponent, outlet: 'moss' },
                        {
                            path: 'wildlife', component: WildlifeComponent, outlet: 'moss',
                            children:
                                [
                                    { path: '', redirectTo: 'wildlife-landing', pathMatch: 'full', outlet: 'wildlife' },
                                    { path: 'birds', component: BirdsComponent, outlet: 'wildlife' },
                                    { path: 'fungi', component: FungiComponent, outlet: 'wildlife' },
                                    { path: 'moths', component: MothsComponent, outlet: 'wildlife' },
                                    { path: 'wildlife-landing', component: WildlifeLandingComponent, outlet: 'wildlife' }
                                ]
                        },
                        { path: 'peatlands', component: PeatlandsComponent, outlet: 'moss' },
                        { path: 'visit-us', component: VisitComponent, outlet: 'moss' }
                    ]
            },
            { path: 'gallery', component: GalleryComponent, data: { state: 'gallery' } },
            //{ path: 'visit-us', component: VisitComponent, data: { state: 'visit-us' } },
            { path: '**', redirectTo: '/home', pathMatch: 'full' },
        ]),
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
