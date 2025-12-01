# Base image
FROM python:3.8

# Install Node.js + Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g yarn

# Install utilities
RUN apt-get install -y curl nano wget git

# Environment variables
ENV ENV_TYPE=staging
ENV MONGO_HOST=mongo
ENV MONGO_PORT=27017
ENV PYTHONPATH=$PYTHONPATH:/src/

# Copy Python dependencies file
COPY src/requirements.txt .

# Install Python dependencies
RUN python -m ensurepip --upgrade
RUN python -m pip install --upgrade "pip<24.1" setuptools wheel
RUN pip install -r requirements.txt
