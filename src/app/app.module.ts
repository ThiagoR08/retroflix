import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";



import { AppRoutingModule } from './services/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { PrateleirasIniciaisComponent } from './components/prateleiras-iniciais/prateleiras-iniciais.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SwiperExampleComponent } from './components/swiper-example/swiper-example.component';
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';
import { FormularioCadastroProdutosComponent } from './components/formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { NovoProdutoComponent } from './components/pages/novo-produto/novo-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PrateleirasIniciaisComponent,
    SobreComponent,
    SwiperExampleComponent,
    ListProdutosComponent,
    FormularioCadastroProdutosComponent,
    NovoProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
