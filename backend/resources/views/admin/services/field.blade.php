@php
    $language = Str::endsWith($fieldKey, '_ar') ? __('admin.services.arabic') : (Str::endsWith($fieldKey, '_en') ? __('admin.services.english') : null);
    $baseKey = preg_replace('/_(en|ar)$/', '', (string) $fieldKey);
    $label = Str::headline($baseKey).($language ? ' ('.$language.')' : '');
    $isList = is_array($value) && array_is_list($value);
@endphp

@if(is_bool($value))
    <div class="field check content-field"><input type="hidden" name="{{ $name }}" value="0"><input id="{{ md5($name) }}" type="checkbox" name="{{ $name }}" value="1" @checked($value)><label for="{{ md5($name) }}">{{ $label }}</label></div>
@elseif($isList && ($value === [] || !is_array($value[0])))
    <div class="field full content-field"><label for="{{ md5($name) }}">{{ $label }} <span class="field-help-inline">{{ __('admin.services.one_per_line') }}</span></label><textarea id="{{ md5($name) }}" name="{{ $name }}">{{ implode("\n", $value) }}</textarea></div>
@elseif($isList)
    <section class="content-group full"><div class="content-group-title"><h3>{{ $label }}</h3><span>{{ trans_choice('admin.resources.item_count', count($value), ['count' => count($value)]) }}</span></div>
    @foreach($value as $index => $item)
        @php($itemTitle = $item['title_en'] ?? $item['label_en'] ?? $item['value'] ?? $item['id'] ?? __('admin.services.item_number', ['number' => $index + 1]))
        <details class="content-item" @if($loop->first) open @endif><summary>{{ $itemTitle }}</summary><div class="content-item-grid">
        @foreach($item as $childKey => $childValue)
            @include('admin.services.field', ['fieldKey' => $childKey, 'value' => $childValue, 'name' => $name.'['.$index.']['.$childKey.']', 'depth' => $depth + 1])
        @endforeach
        </div></details>
    @endforeach
    </section>
@elseif(is_array($value))
    <section class="content-group full"><div class="content-group-title"><h3>{{ $label }}</h3></div><div class="content-item-grid">
    @foreach($value as $childKey => $childValue)
        @include('admin.services.field', ['fieldKey' => $childKey, 'value' => $childValue, 'name' => $name.'['.$childKey.']', 'depth' => $depth + 1])
    @endforeach
    </div></section>
@else
    <div class="field {{ Str::contains($baseKey, ['description']) || Str::length((string) $value) > 120 ? 'full' : '' }} content-field"><label for="{{ md5($name) }}">{{ $label }}</label>
    @if(Str::contains($baseKey, ['description']) || Str::length((string) $value) > 120)<textarea id="{{ md5($name) }}" name="{{ $name }}">{{ $value }}</textarea>@else<input id="{{ md5($name) }}" type="text" name="{{ $name }}" value="{{ $value }}">@endif</div>
@endif
