import { ProfileForm } from "@/components/user";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Settings, Save } from "lucide-react";
import { useState } from "react";

export function ProfilePage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header da Página */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <User className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Meu Perfil</h1>
        </div>
        <p className="text-muted-foreground">
          Gerencie suas informações pessoais e configurações de conta
        </p>
      </div>

      {/* Mensagem de Sucesso */}
      {showSuccessMessage && (
        <Card className="mb-6 border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-green-700">
              <Save className="h-4 w-4" />
              <span className="font-medium">Perfil atualizado com sucesso!</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Informações da Conta */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Informações da Conta
          </CardTitle>
          <CardDescription>
            Dados básicos da sua conta no sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium text-muted-foreground">ID da Conta:</span>
              <p className="font-mono">#USR-001</p>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Membro desde:</span>
              <p>Janeiro 2024</p>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Última atualização:</span>
              <p>Agora mesmo</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Formulário de Perfil */}
      <form>
        <ProfileForm onSuccess={handleSuccess} />
      </form>

      {/* Informações Adicionais */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Privacidade</CardTitle>
            <CardDescription>
              Controle quem pode ver suas informações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email público</span>
                <span className="text-xs text-muted-foreground">Privado</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Telefone público</span>
                <span className="text-xs text-muted-foreground">Privado</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Localização pública</span>
                <span className="text-xs text-muted-foreground">Privado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Segurança</CardTitle>
            <CardDescription>
              Mantenha sua conta segura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Senha</span>
                <span className="text-xs text-green-600">Segura</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Autenticação 2FA</span>
                <span className="text-xs text-muted-foreground">Não ativada</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Sessões ativas</span>
                <span className="text-xs text-muted-foreground">1 dispositivo</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
