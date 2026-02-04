import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com um serviço de email como:
    // - SendGrid
    // - Resend
    // - Mailgun
    // - ou salvar em um banco de dados

    console.log('Novo contato recebido:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Por enquanto, apenas retornamos sucesso
    return NextResponse.json(
      { success: true, message: 'Mensagem recebida com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação' },
      { status: 500 }
    );
  }
}
