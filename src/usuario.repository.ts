export class UsuarioRepository {

    private usuarios: any = []
    
    async salvar(usuario: any) {
        this.usuarios.push(usuario)
        console.log(this.usuarios)
    }
    
    async listar() {
        return this.usuarios
    }
    
}
