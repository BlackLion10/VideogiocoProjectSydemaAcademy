package logica;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

import bean.Partita;
import bean.Utente;
import dao.GiocoHDao;
import dao.UtenteHDao;

public abstract class UtenteManager {
	
	static ClassPathResource resource = new ClassPathResource("UtenteHDao.xml");
	static XmlBeanFactory factory = new XmlBeanFactory(resource);
	
	
	private static boolean validatore;
	
	public static final boolean verificaPresenzaUtente(String nickname) throws Exception {
			UtenteHDao utenteHDao=(UtenteHDao) factory.getBean("utentehdao", UtenteHDao.class);
			return utenteHDao.verificaPresenzaUtente(nickname);
	}
	
	public static final boolean login(String nickname,String password) throws Exception {
		
		UtenteHDao utenteHDao=(UtenteHDao) factory.getBean("utentehdao", UtenteHDao.class);
		Utente utente= utenteHDao.getUtenteLoginSql(nickname,password);
		if(utente!=null) {
			validatore=true;
		}
		else {
			validatore=false;
		}
		return validatore;	
	}
	
	public static final List<Partita> listaClassifica() throws Exception {
		GiocoHDao giocoHDao=new GiocoHDao();
		List<Partita> risultati=new ArrayList<Partita>();
		risultati=giocoHDao.getClassificaCriteria(1);
		return risultati;
	}
	
	public static final void registraUtente(String nickname,String paese,String password) throws Exception {
		Utente utente= new Utente();
		UtenteHDao utenteHDao=(UtenteHDao) factory.getBean("utentehdao", UtenteHDao.class);
		utente.setNickname(nickname);
		utente.setPaese(paese);
		utente.setPassword(password);
		utenteHDao.crea(utente);
	}
	
}
