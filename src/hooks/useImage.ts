import { markerType } from '#/markes';
import { Ref } from 'vue';
export function useImage(container: Ref<HTMLElement>, markers: Array<markerType>, src: string) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const state = reactive({
    zoom: 1,
    style: {
      transformOrigin: '0 0',
      transform: 'scale(1)',
    },
  });
  const onWheel = (event: MouseEvent) => {
    const { offsetX: x, offsetY: y } = event;
    //@ts-ignore
    const cache = event.wheelDelta / 1200;
    state.zoom += cache;
    if (state.zoom < 1) state.zoom = 1;

    if (cache >= 0) {
      state.style.transformOrigin = `${x}px ${y}px`;
    }
    state.style.transform = `scale(${state.zoom})`;
  };
  onMounted(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      canvas.width = container.value.clientWidth;
      canvas.height = image.height * (container.value.clientWidth / image.width);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      container.value.appendChild(canvas);
      canvas.addEventListener('wheel', onWheel);
    };
  });
  watch([state.style], () => {
    canvas.style.transform = state.style.transform;
    canvas.style.transformOrigin = state.style.transformOrigin;
  });
  return {
    canvas,
  };
}
