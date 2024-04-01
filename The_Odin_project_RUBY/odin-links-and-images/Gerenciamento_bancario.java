/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.gerenciamentobancario;

/**
 *
 * @author larissa.costa
 */

import java.util.Scanner;

// Classe para dados pessoais e operações bancárias
class ContaBancaria {
    private String nome;
    private String sobrenome;
    private String cpf;
    private double saldo;

    public ContaBancaria(String nome, String sobrenome, String cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.saldo = 0.0; // saldo inicial zerado
    }

    public void consulta

    public void depositar(double valor) {
        saldo += valor;
        System.out.println("Depósito de R$" + valor + " realizado com sucesso.");
    }

    public void sacar(double valor) {
        if (valor > saldo) {
            System.out.println("Saldo insuficiente.");
        } else {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado com sucesso.");
        }
    }
}

// Classe principal
public class GerenciamentoBancario {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nome, sobrenome, cpf;
        System.out.println("Bem-vindo ao Gerenciamento Bancário!");

        // Solicitar dados pessoais do usuário
        System.out.print("Digite seu nome: ");
        nome = scanner.nextLine();
        System.out.print("Digite seu sobrenome: ");
        sobrenome = scanner.nextLine();
        System.out.print("Digite seu CPF: ");
        cpf = scanner.nextLine();

        ContaBancaria conta = new ContaBancaria(nome, sobrenome, cpf);

        int opcao;
        do {
            exibirMenu();
            opcao = scanner.nextInt();
            switch (opcao) {
                case 1:
                    conta.consultarSaldo();
                    break;
                case 2:
                    System.out.print("Digite o valor a depositar: ");
                    double valorDeposito = scanner.nextDouble();
                    conta.depositar(valorDeposito);
                    break;
                case 3:
                    System.out.print("Digite o valor a sacar: ");
                    double valorSaque = scanner.nextDouble();
                    conta.sacar(valorSaque);
                    break;
                case 4:
                    System.out.println("Encerrando a aplicação. Obrigado!");
                    break;
                default:
                    System.out.println("Opção inválida. Por favor, tente novamente.");
            }
        } while (opcao != 4);

        scanner.close();
    }

    // Método para exibir o menu
    public static void exibirMenu() {
        System.out.println("\nMenu:");
        System.out.println("1. Consultar saldo");
        System.out.println("2. Realizar depósito");
        System.out.println("3. Realizar saque");
        System.out.println("4. Encerrar");
        System.out.print("Escolha uma opção: ");
    }
}