export NGC_API_KEY=<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>
export LOCAL_NIM_CACHE=~/.cache/nim
mkdir -p "$LOCAL_NIM_CACHE"
docker run -it --rm \
    --gpus all \
    --shm-size=16GB \
    -e NGC_API_KEY \
    -v "$LOCAL_NIM_CACHE:/opt/nim/.cache" \
    -u $(id -u) \
    -p 8000:8000 \
    nvcr.io/nim/nvidia/nvidia-nemotron-nano-9b-v2:latest
