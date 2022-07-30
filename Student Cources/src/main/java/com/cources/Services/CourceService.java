package com.cources.Services;

import com.cources.Model.Cources;

import java.util.List;

public interface CourceService {

public List<Cources> GetAll();

public Cources GetSingleCource(int id);

Cources SaveCource(Cources cources);

void DeleteCource(int id);

Cources UpdateCource(Cources cources);

}
