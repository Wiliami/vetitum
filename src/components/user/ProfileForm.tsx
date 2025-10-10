import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfileForm } from "@/hooks/user/useProfileForm";
import { User, Mail, Phone, Building, MapPin, Globe, FileText } from "lucide-react";

interface ProfileFormProps {
  onSuccess?: () => void;
}

export function ProfileForm({ onSuccess }: ProfileFormProps) {
  const { form, onSubmit, isSubmitting, isLoading, user, errors } = useProfileForm({
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      console.error('Erro ao atualizar perfil:', error);
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Carregando dados do perfil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Seção do Avatar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Foto do Perfil
          </CardTitle>
          <CardDescription>
            Sua foto de perfil será exibida em todo o sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback>
                {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Label htmlFor="avatar">URL do Avatar</Label>
              <Input 
                id="avatar" 
                placeholder="https://exemplo.com/avatar.jpg" 
                {...form.register('avatar')}
                className={errors.avatar ? "border-red-500" : ""}
              />
              {errors.avatar && (
                <span className="text-red-500 text-sm">{errors.avatar.message}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informações Pessoais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Informações Pessoais
          </CardTitle>
          <CardDescription>
            Suas informações básicas de contato
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input 
                id="name" 
                placeholder="Seu nome completo" 
                {...form.register('name')}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input 
                id="email" 
                type="email"
                placeholder="seu@email.com" 
                {...form.register('email')}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Telefone
              </Label>
              <Input 
                id="phone" 
                placeholder="(11) 99999-9999" 
                {...form.register('phone')}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Localização
              </Label>
              <Input 
                id="location" 
                placeholder="São Paulo, SP" 
                {...form.register('location')}
                className={errors.location ? "border-red-500" : ""}
              />
              {errors.location && (
                <span className="text-red-500 text-sm">{errors.location.message}</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informações Profissionais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Informações Profissionais
          </CardTitle>
          <CardDescription>
            Suas informações de trabalho e carreira
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input 
                id="company" 
                placeholder="Nome da sua empresa" 
                {...form.register('company')}
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && (
                <span className="text-red-500 text-sm">{errors.company.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Cargo</Label>
              <Input 
                id="position" 
                placeholder="Seu cargo atual" 
                {...form.register('position')}
                className={errors.position ? "border-red-500" : ""}
              />
              {errors.position && (
                <span className="text-red-500 text-sm">{errors.position.message}</span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Website
            </Label>
            <Input 
              id="website" 
              placeholder="https://seusite.com" 
              {...form.register('website')}
              className={errors.website ? "border-red-500" : ""}
            />
            {errors.website && (
              <span className="text-red-500 text-sm">{errors.website.message}</span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Bio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Biografia
          </CardTitle>
          <CardDescription>
            Conte um pouco sobre você
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="bio">Sobre você</Label>
            <textarea
              id="bio"
              placeholder="Conte um pouco sobre sua experiência, interesses e objetivos..."
              {...form.register('bio')}
              className={`flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.bio ? "border-red-500" : ""}`}
            />
            {errors.bio && (
              <span className="text-red-500 text-sm">{errors.bio.message}</span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Botões de Ação */}
      <div className="flex justify-end gap-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => form.reset()}
          disabled={isSubmitting}
        >
          Cancelar
        </Button>
        <Button 
          type="submit" 
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
        </Button>
      </div>
    </div>
  );
}
