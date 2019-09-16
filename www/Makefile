deploy-base:
	docker build -t keaaa/www-lightning-base -f base.Dockerfile .
	docker push keaaa/www-lightning-base:latest 

build:
	docker build -t www-lightning .

run:
	docker run -it --rm -p 3000:3000 www-lightning