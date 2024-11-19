package com.example.s14retoutec.Carreras;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Carreras {
    @Id
    private long id;

    private Carrerras name;

}