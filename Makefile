DOCKER_COMPOSE_FILE := docker-compose.local.yml
dc = docker-compose -f $(DOCKER_COMPOSE_FILE)
app := "frontend"

up:
	$(dc) up -d

down:
	$(dc) down

enter:
	$(dc) exec $(app) bash

logs:
	$(dc) logs -f

restart:
	$(dc) restart $(app)
