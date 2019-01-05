package es.urjc.code.juegosenred;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import es.urjc.code.juegosenred.PersonajeHandler;
import es.urjc.code.juegosenred.ChatHandler;

@SpringBootApplication
@EnableWebSocket
public class RestEjer1ConUiApplication implements WebSocketConfigurer {
 
	public static void main(String[] args) {
		SpringApplication.run(RestEjer1ConUiApplication.class, args);
	}
	
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(createPersonajeHandler(), "/personajes").setAllowedOrigins("*");
		registry.addHandler(createPlayerHandler(), "/players").setAllowedOrigins("*");
		registry.addHandler(createChatHandler(), "/chat").setAllowedOrigins("*");
		registry.addHandler(createSalasHandler(), "/salas").setAllowedOrigins("*");
	}
	
	@Bean
	public PersonajeHandler createPersonajeHandler() {
		return new PersonajeHandler();
	}
	
	@Bean
	public PlayerHandler createPlayerHandler() {
		return new PlayerHandler();
	}
	
	@Bean
	public ChatHandler createChatHandler() {
		return new ChatHandler();
	}
	
	@Bean
	public SalasHandler createSalasHandler() {
		return new SalasHandler();
	}
}
