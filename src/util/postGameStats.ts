/**
 * Posts game stats to a Google Form.
 * This is done asynchronously to avoid blocking the UI.
 * @param data Game stats data
 */
export default function(data: Object) : void {
  
}

function getFormsURL() : string|undefined {
  return import.meta.env.VITE_STATS_FORM_URL
}

function getFieldMapping() : Map<string, string> {
  const map = new Map<string, string>()
  const mapping = import.meta.env.VITE_STATS_FIELD_MAPPING
  if (mapping) {
    mapping.split(';').forEach((pair: string) => {
      const [key, value] = pair.split(':')
      if (key && value) {
        map.set(key, value)
      }
    })
  }
  return map
}
