import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailUnico } from "src/usuario/validacao/email-unico.validator";

export class CriaUsuarioDto {

    @IsNotEmpty({ message: 'O nome é obrigatório' })
    nome: string;
    
    @IsEmail(undefined, { message: 'O email inserido e invalido' })
    @EmailUnico({ message: 'Ja existe um usuario com esse email' })
    email: string;
    
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    senha: string;
}