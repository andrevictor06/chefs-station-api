package com.yorkdercorsoftware.chefsstationapi.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yorkdercorsoftware.chefsstationapi.modelos.ReceitaVO;

@RestController
@RequestMapping("/receitas")
public class ReceitasController {
	
	@GetMapping
	public ArrayList<ReceitaVO> destaques() {
		System.out.println("Buscou os Destaques");
		ArrayList<ReceitaVO> lista = new ArrayList<ReceitaVO>();
		lista.add(new ReceitaVO("1", "Caldo Cabeça de Galo à Paraibana", "https://reactnative.dev/img/tiny_logo.png", "40 min"));
		lista.add(new ReceitaVO("2", "Coxinha de Batata", "https://i.pinimg.com/originals/4d/cb/14/4dcb14a434556067baa9b9e0291bd801.jpg", "1h e 30 min"));
		lista.add(new ReceitaVO("3", "Empadão Goiano com Guariroba", "https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/18/2014/07/24025147/6BaVde_t20_VKbpQ7-e1527130375674.jpg", "30 min"));
		lista.add(new ReceitaVO("4", "Caldo Cabeça de Galo à Paraibana", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eiNJH1JUNM0PsALtJplblxe5_iLrb04-QQ&usqp=CAU", "40 min"));
		lista.add(new ReceitaVO("5", "Coxinha de Batata", "https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/11/ie2653_capa_facebook.jpg", "1h e 30 min"));
		lista.add(new ReceitaVO("6", "Empadão Goiano com Guariroba", "https://s2.glbimg.com/VC3nkVOmAda02AYCe04T3n-HXW8=/0x0:7200x10200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/z/N/LRwIwoQiCXHm0omK8TTw/eas-fifa21-standard-keyart-vert-rgb.jpg", "30 min"));
		
		
		return lista;
	}
}
