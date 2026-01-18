import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { CpfUnico } from "src/usuario/validacao/cpf-unico.validator";
import { EmailUnico } from "src/usuario/validacao/email-unico.validator";
import { IsCPF } from "class-validator-cpf";

export class CriaUsuarioDto {

    @IsNotEmpty({ message: 'O nome é obrigatório' })
    nome: string;
    
    @IsEmail(undefined, { message: 'O email inserido e invalido' })
    @EmailUnico({ message: 'Ja existe um usuario com esse email' })
    email: string;
    
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    senha: string;
    
    @IsNotEmpty({ message: 'O cpf é obrigatório' })
    @IsCPF({ message: 'O cpf inserido e invalido' })
    @CpfUnico({ message: 'Ja existe um usuario com esse cpf' })
    cpf: string;
}