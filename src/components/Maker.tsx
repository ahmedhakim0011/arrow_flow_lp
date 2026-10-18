import { MAKER } from '@/config';

/** Quiet "Presented by" chip used under the hero. */
export function PresentedBy() {
  return (
    <p className="presented"><span className="dot" aria-hidden="true" />Presented by <a href={MAKER.url} target="_blank" rel="noopener">{MAKER.name}</a></p>
  );
}
