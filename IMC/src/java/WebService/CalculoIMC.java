/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package WebService;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import java.lang.Math;

/**
 *
 * @author Alunos
 */
@WebService(serviceName = "CalculoIMC")
public class CalculoIMC {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
    }

    /**
     * Operação de Web service
     */
    @WebMethod(operationName = "CalculaIMC")
    public String CalculaIMC(@WebParam(name = "altura") double altura, @WebParam(name = "peso") double peso) {
        //TODO write your implementation code here:
        Double calculoIMC = peso / Math.pow(altura, 2);
        if(calculoIMC <= 18.4) {
            return "Abaixo do Peso";
        } if(calculoIMC > 18.5 && calculoIMC < 24.9) {
            return "Peso Normal";
        } if(calculoIMC > 25 && calculoIMC < 29.9) {
            return "Sobrepeso";
        } if(calculoIMC > 30 && calculoIMC < 34.9) {
            return "Obesidade Grau 1";
        } if(calculoIMC > 35 && calculoIMC < 39.9) {
            return "Obesidade Grau 2";
        } if(calculoIMC > 40) {
            return "Obesidade Grau 3";
        }
        return "Não foi possível calcular o IMC";
    }
}
