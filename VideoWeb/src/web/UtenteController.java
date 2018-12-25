package web;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.hibernate.query.Query;

import bean.Partita;
import bean.Utente;
import dao.UtenteHDao;

import logica.UtenteManager;
import utilities.Utilities;


@Controller
public class UtenteController {
	
	ClassPathResource resource = new ClassPathResource("UtenteHDao.xml");
	XmlBeanFactory factory = new XmlBeanFactory(resource);
		
	private boolean validatore;
	
	private boolean loginSuccess;
	
	private String uri;

	private Utente utente=null;
	
	@GetMapping("/login")
	private String loginValidator(@RequestParam("nickname") String nickname,@RequestParam("pwd1") String password,HttpSession httpSession,Model model) throws Exception {

		validatore=UtenteManager.login(nickname,password);
		if(validatore) {
			uri="homepage";
			UtenteHDao utenteHDao=(UtenteHDao) factory.getBean("utentehdao", UtenteHDao.class);
			utente=utenteHDao.getUtenteLoginSql(nickname,password);
			httpSession.setAttribute("utente", utente);
			loginSuccess=true;
			model.addAttribute("utenteloggato", loginSuccess);
		}
		else {
			uri="homepage";
			loginSuccess=false;
			model.addAttribute("utenteloggato", loginSuccess);
			model.addAttribute("messaggioLogin", "nickname o password sbagliati!");
		}
		return uri;
	}
	
	@GetMapping("/home")
	private String toHome(Model model) {
		loginSuccess=Utilities.verificaPresenzaUtente(utente);
		model.addAttribute("utenteloggato", loginSuccess);
		return "homepage";
	}
	
	@GetMapping("/registrazioneUtente")
	private String registraUtente(@RequestParam("nickname") String nickname, @RequestParam("paese") String paese,@RequestParam("pwd1") String password,Model model) throws Exception {
		validatore=UtenteManager.verificaPresenzaUtente(nickname);
		if(validatore) {
			uri="form";
			model.addAttribute("messaggio", "nickname non disponibile!");
		}
		else {
			uri="registrazioneavvenuta";
			UtenteManager.registraUtente(nickname, paese, password);
			model.addAttribute("nickname", nickname);
			model.addAttribute("paese", paese);
			model.addAttribute("password", password);
		}
		return uri;		
	}
	
	@GetMapping("/registrazione")
	private String registra(Model model) {
		loginSuccess=Utilities.verificaPresenzaUtente(utente);
		model.addAttribute("utenteloggato", loginSuccess);
		return "form";	
	}
	
	@GetMapping("/gioco")
	private String game(HttpSession httpSession,Model model) {
		httpSession.setAttribute("utente", utente);
		loginSuccess=Utilities.verificaPresenzaUtente(utente);
		model.addAttribute("utenteloggato", loginSuccess);
		return "gioco";
	}
	
	@GetMapping("/giocoDemo")
	private String gameDemo(Model model) {
		model.addAttribute("messaggioAllenamento", "MODALITA' ALLENAMENTO");
		loginSuccess=Utilities.verificaPresenzaUtente(utente);
		model.addAttribute("utenteloggato", loginSuccess);
		return "giocoDemo";
	}
	
	@GetMapping("/logout")
	private String logout(HttpSession httpsession,Model model) {
		httpsession.removeAttribute("utente");
		loginSuccess=false;
		model.addAttribute("utenteloggato", loginSuccess);
		return "homepage";
		
	}
	
	@GetMapping("/class")
	private String classificaPage(Model model) throws Exception {
		System.out.println("classifica");
		List<Partita> risultati=UtenteManager.listaClassifica();
		for(int i=0;i<risultati.size();i++) {
			model.addAttribute("nickname"+i, risultati.get(i).getUtente().getNickname());
			model.addAttribute("punteggio"+i, risultati.get(i).getPunteggio());
			model.addAttribute("paese"+i, risultati.get(i).getUtente().getPaese());
		}
		loginSuccess=Utilities.verificaPresenzaUtente(utente);
		model.addAttribute("utenteloggato", loginSuccess);
		
		return "classifica";	
	}
			
}
