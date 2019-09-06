deploy-base:
	docker build -t keaaa/echo-base -f base.Dockerfile .
	docker push keaaa/echo-base:latest 

build:
	docker build -t echo-lightning .

run:
	docker run -it --rm -p 3001:3001 echo-lightning