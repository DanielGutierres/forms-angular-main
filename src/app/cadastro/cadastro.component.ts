import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  ConsultaCEP() {
    throw new Error("Method not implemented.");
  }

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService,
  ) {}

  ngOnInit(): void {}

  consultaCEP(evento: any, formulario: NgForm) {
    const cep = evento.target.value;
    if (cep !== "") {
      this.consultaCepService
        .getConsultaCEP(cep)
        .subscribe((resultaddo) => 
          {
            console.log(resultaddo)
            this.populandoEndereco(resultaddo, formulario);
          });
    }
  }

  populandoEndereco(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
        endereco: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    });
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
    } else {
      alert(
        "Formulário inválido. Por favor, preencha todos os campos corretamente.",
      );
    }
    console.log(form.controls);
  }
}
