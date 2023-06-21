FROM continuumio/miniconda3

RUN mkdir -p /backend

COPY ./backend /backend

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/backend/bin:$PATH
ENV PYTHONDONTWRITEBYTECODE=1
RUN echo "source activate backend">~/.bashrc

WORKDIR /backend