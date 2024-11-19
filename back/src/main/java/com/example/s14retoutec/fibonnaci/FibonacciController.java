package com.example.s14retoutec.fibonnaci;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class FibonacciController {

    @GetMapping("/measurePerformance/{n}")
    public String measurePerformance(@PathVariable int n) {
        long startTime = System.nanoTime();

        // Obtener todos los números de Fibonacci hasta n
        List<Long> fibonacciSequence = Fibonacci.generateFibonacciSequence(n);

        long endTime = System.nanoTime();
        long duration = endTime - startTime;

        // Formatear la secuencia como una cadena
        String sequenceString = fibonacciSequence.toString();

        return String.format(
                "Fibonacci sequence up to %d: %s, Execution Time = %d ns",
                n, sequenceString, duration
        );
    }

    // Clase estática para el cálculo de la secuencia de Fibonacci
    public static class Fibonacci {
        public static List<Long> generateFibonacciSequence(int n) {
            List<Long> sequence = new ArrayList<>();
            long a = 0, b = 1;

            for (int i = 0; i <= n; i++) {
                sequence.add(a);
                long next = a + b;
                a = b;
                b = next;
            }

            return sequence;
        }
    }
}
