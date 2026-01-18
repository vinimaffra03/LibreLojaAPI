import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import EmailUnicoValidator from "./validacao/email-unico.validator";
import CpfUnicoValidator from "./validacao/cpf-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUnicoValidator, CpfUnicoValidator]
})

export class UsuarioModule {}