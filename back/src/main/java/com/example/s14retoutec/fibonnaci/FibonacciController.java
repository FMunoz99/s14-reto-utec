package com.example.s14retoutec.fibonnaci;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FibonacciController {

    @GetMapping("/measurePerformance/{n}")
    public String measurePerformance(@PathVariable int n) {
        long startTime = System.nanoTime();

        // Ejecutar el algoritmo que quieres medir
        long fibonacciResult = Fibonacci.fibonacci(n);

        long endTime = System.nanoTime();
        long duration = endTime - startTime;

        return String.format(
                "Fibonacci(%d) = %d, Execution Time = %d ns",
                n, fibonacciResult, duration
        );
    }

    // Clase estática para el cálculo de Fibonacci
    public static class Fibonacci {
        public static long fibonacci(int n) {
            if (n <= 1) {
                return n;
            }
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
}
